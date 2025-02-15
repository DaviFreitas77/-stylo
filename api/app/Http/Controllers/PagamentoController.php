<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Charge;

class PagamentoController extends Controller
{
    public function createCharge(Request $request)
    {
        try {
   
            Stripe::setApiKey(env('STRIPE_SECRET'));

            $charge = Charge::create([
                'amount' => $request->valor, 
                'currency' => 'brl',
                'source' => $request->token, 
                'description' => 'Pagamento no e-commerce',
            ]);

            return response()->json($charge );
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }
}
