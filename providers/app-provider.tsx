import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, ThemeConfig } from 'antd'
import React, { ReactNode } from 'react'

function AppProvider({ children }: { children: ReactNode }) {

    const config: ThemeConfig = {
        token: {
            colorPrimary: '#24A1DE',
            borderRadius: 2,
        },
        components: {
            Button: {
                controlHeight: 45,
                boxShadow: "none",
                colorPrimary: '#54A1DD'
            }
        }
    };

    return (
        <ConfigProvider
            theme={config}
        >
            <AntdRegistry>
                {children}
            </AntdRegistry>
        </ConfigProvider>
    )
}

export default AppProvider