<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        \DB::table('users')->truncate();

    	$created_at = $updated_at = date('Y-m-d H:i:s');
    	$user_name_array = [
    		[
    			'name' => 'admin',
    			'email' => 'admin@buiphongit.com',
    			'password' => bcrypt('123456'),
	            'created_at' => $created_at,
	            'updated_at' => $updated_at
    		],
            [
    			'name' => 'bp',
    			'email' => 'bp@buiphongit.com',
    			'password' => bcrypt('123456'),
	            'created_at' => $created_at,
	            'updated_at' => $updated_at
    		],
        ];

        \DB::table('users')->insert($user_name_array);

    }
}
