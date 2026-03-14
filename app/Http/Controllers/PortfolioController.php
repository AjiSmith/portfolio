<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PortfolioController extends Controller
{
    public function index()
    {
        // Controller sekarang hanya bertugas merender halaman
        return Inertia::render('Welcome');
    }
}