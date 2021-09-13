<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class IpAddress extends Model
{
    public $timestamps = false;
    protected $table = 'ip_address';
    protected $fillable = [
        'ip', 'comment'
    ];
}
