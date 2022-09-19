<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;


use Hekmatinasser\Verta\Verta;
use App\Models\Day;


class MonthSeed extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'month:seed';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'its command for seeding days of a month data';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        if($today=new verta()==verta()->startMonth()->subWeek())
        {
            
        }
        $startM=verta()->startMonth();
        $day=verta()->startMonth();
        $endM=verta()->endMonth();
        $array = array();
        while($day<=$endM)
        {
            $data=['time'=>$day->format('%B %d، %Y'),'day'=>$day->formatWord('l')];
            array_push($array, $data);
            
            $createdDay = Day::factory()->create([
                'time' => $day->timestamp,
            ]);

            $day=$day->addDay();
        }
        
        $this->table(
            ['time', 'day'],
            $array
        );
        $this->info('month seeding Successfully done.');
        // return response()->json(['calendar'=>$array], 200);
        // return $array;
    }
}
