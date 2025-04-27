import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import webpack, {Configuration} from 'webpack';
import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ReactRefreshTs from "react-refresh-typescript";

type Mode = 'production' | 'development';

interface Env {
    mode: Mode
}

export default (env: Env) => {

    const isDev = env.mode === 'development';
    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ];

    if (isDev) {
        plugins.push(new ForkTsCheckerWebpackPlugin());
        plugins.push(new ReactRefreshPlugin())
    } else {
        plugins.push(new BundleAnalyzerPlugin());
    }

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        plugins: plugins,
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        {
                            loader: 'ts-loader',
                            options: {
                                transpileOnly: isDev,
                                getCustomTransformers: () => ({
                                    before: [isDev && ReactRefreshTs()].filter(Boolean)
                                })
                            },
                        }
                    ],
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.(png|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: '@svgr/webpack',
                            options: {icon: true}
                        }
                    ],
                }
            ],
        },
        resolve: {
            extensions: ['.tsx', 'ts', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        devtool: isDev ? 'inline-source-map' : false,
        devServer: isDev ? {
            port: 3000,
            open: true,
            historyApiFallback: true,
            hot: true
        } : undefined,
    }

    return config;

}