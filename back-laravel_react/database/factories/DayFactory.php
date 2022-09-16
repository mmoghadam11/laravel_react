<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Hekmatinasser\Verta\Verta;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Day>
 */
class DayFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $user=User::where('name','مهدیار') -> first();
        $user2=User::where('name','میثم') -> first();

        $dayData=[
            'user'=>$this->faker->randomElement([$user->name,$user2->name]),
            'H'=>$this->faker->randomElement(['15:30-23:00','07:00-15:30']),
            'val'=>false,
        ];
        // dd($dayData['user']);
        $today=new verta();
        return [
            'data'=>[$dayData['user']=>$dayData],
            'time'=>$today->timestamp,
        ];
    }
}
