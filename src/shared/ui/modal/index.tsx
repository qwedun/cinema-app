import { ReactNode, MouseEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { CloseIcon } from '@/shared';
import styles from './styles.module.scss';

interface IModalProps {
    isOpen: boolean;
    children?: ReactNode;
    setClose: () => void;
}

export const Modal = ({children, isOpen, setClose} : IModalProps) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) setClose()
    }, [navigate]);

    const handleClose = (e: MouseEvent) => {
        e.stopPropagation()
        setClose();
    }

    if (!isOpen) return null

    return createPortal(
        <div className={styles.modal} onClick={handleClose}>
            <div className={styles.container}>
                <button onClick={handleClose} className={styles.close}>
                    <CloseIcon width={20} height={20} fill='white' className={styles.close}/>
                </button>
                <div className={styles.children} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
        , document.body
    )
}