<?php

namespace App\Http\Controllers;

use App\Comment;
use App\IpAddress;
use Illuminate\Http\Request;

class IpAddressController extends Controller
{

    public function index() {
        return response(IpAddress::all(), 200);
    }

    public function store(Request $request) {
        $this->validate($request, [
            'ip' => 'required|ip',
            'comment' => 'required'
        ]);

        $exists = IpAddress::where('ip', $request->ip)->count();
        if($exists > 0) {
            return response(['message' => 'Ip Address already exists.'], 200);
        }

        IpAddress::create($request->all());

        return response(['message' => 'Ip Address added.', 'data' => IpAddress::all()], 200);
    }

    public function edit($id, Request $request) {
        $this->validate($request, [
            'comment' => 'required'
        ]);

        $update = IpAddress::find($id);
        if(is_null($update)) {
            return response(['message' => 'Ip Address not found.'], 404);
        }
        Comment::create([
            'comment' => $update->comment,
            'ip_address_id' => $id
        ]);
        $update->update($request->all());
        return response(['message' => 'Ip Address updated.', 'data' => $update], 200);
    }

    public function show($id) {

        $update = IpAddress::find($id);
        if(is_null($update)) {
            return response(['message' => 'Ip Address not found.'], 404);
        }

        return response([$update, 200]);

    }

    public function view($id) {
        $ipAddress = IpAddress::find($id);
        if(is_null($ipAddress)) {
            return response(['message' => 'Ip Address not found.'], 404);
        }
        $comment = Comment::where('ip_address_id', $id)->orderBy('id', 'DESC')->get();

        return response(['comment' => $comment, 'ip' => $ipAddress], 200);
    }

}
