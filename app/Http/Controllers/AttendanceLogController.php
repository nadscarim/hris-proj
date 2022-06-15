<?php

namespace App\Http\Controllers;

use App\Models\AttendanceLog;
use Illuminate\Http\Request;
use Carbon\Carbon;
use DB;

class AttendanceLogController extends Controller
{
    public function index(){
        return view('user/user');
    }

    public function timeInOut(Request $request) {
        $date = Carbon::now()->format('Y-m-d H:i');
            $attendanceLog = AttendanceLog::insert([
                'timestamp' => $date,
                'type'      => $request->type,
                'user_id'   => 2,
                'log_type'  => 'regular'
                        ]);
            // toast('Time Ins Successfully!', 'success');
            return redirect()->route('index'); 
    }

    public function getAttendanceLogs() {
        $fetchLogs = DB::itable('attendance_logs')
            ->select('*')
            ->get()

            return route('index');
    }
}
