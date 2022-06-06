import HomeContainer from "../../../main/user/home/HomeContainer"
import AttendanceContainer from "../../../main/user/attendance/AttendanceContainer"

const route = [
    { path: '/', exact: true, breadcrumbName: 'Main', name: 'Main' },
    { path: '/dashboard', breadcrumbName: 'Dashboard', name: 'Dashboard', component: HomeContainer },
    { path: '/attendance', breadcrumbName: 'Attendance', name: 'Attendance', component: AttendanceContainer }
]

export default route