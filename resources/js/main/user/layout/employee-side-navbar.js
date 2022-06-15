import { DashboardOutlined, FontColorsOutlined } from '@ant-design/icons' 

export default {
    items: [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: <DashboardOutlined />,
            key: 'dashboard'
        },
        {
            name: 'Attendance',
            link: '/attendance',
            icon: <FontColorsOutlined />,
            key: 'attendance'
        }
    ]
}