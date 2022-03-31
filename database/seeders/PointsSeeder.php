<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PointsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 20; $i++)
        DB::table('points')->insert([
            'point_a' => 'Москва, ул. Ленина д. '.$i,
            'point_b' => 'Москва, ул. Пушкина д. '.$i
        ]);
    }
}
