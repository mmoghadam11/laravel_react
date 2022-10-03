<?php

namespace App\Services;
use App\Models\Day;
use App\Models\User;
use Hekmatinasser\Verta\Verta;


class CalendarService {

    // public function __construct(SessionManager $session)
    // {
    //     $this->session = $session;
    // }

    public function Calendar(User $user):array
    {
        $userName=$user->name;
        $today=new verta();
        $startM=verta()->startMonth();
        // $day=verta()->startMonth();
        $endM=verta()->endMonth();
        $array = array();

        $days=Day::whereBetween("time",[$startM->toCarbon(),$endM->toCarbon()])->get();
        foreach ($days as $day){
            $time=verta($day->time);
            $flag=false;
            if(array_key_exists($userName, $day->data)){
                $flag=true;
            }
            $data=['data'=>$day->data,'time'=>$time->format('%B %d، %Y'),'day'=>$time->formatWord('l'),'dayNum'=>$time->format('%d'),'flag'=>$flag];
            array_push($array, $data);  
        }

        return [$array,$startM->dayOfWeek,$startM->formatWord('F'),$today];
    }

}