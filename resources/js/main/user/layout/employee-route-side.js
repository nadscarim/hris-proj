import HomeContainer from "../home/HomeContainer"
import AttendanceContainer from "../attendance/AttendanceContainer"

const route = [
    { path: '/', exact: true, breadcrumbName: 'Main', name: 'Main' },
    { path: '/dashboard', breadcrumbName: 'Dashboard', name: 'Dashboard', component: HomeContainer },
    { path: '/attendance', breadcrumbName: 'Attendance', name: 'Attendance', component: AttendanceContainer }
]

export default route