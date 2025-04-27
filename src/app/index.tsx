import { createRoot } from "react-dom/client";
import { WithProviders } from "@/app/providers";
import { Router } from "@/app/router";

import React from 'react';

const root = document.getElementById('root');

const container = createRoot(root);

container.render(
    <WithProviders>
        <Router/>
    </WithProviders>
)
