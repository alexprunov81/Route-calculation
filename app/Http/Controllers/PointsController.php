<?php

namespace App\Http\Controllers;


use App\Models\Point;
use Illuminate\Http\Request;

class PointsController extends Controller
{
    public function index() {
        $points = Point::all();
        return view('index', [
            'points' => $points
        ]);
}
}
