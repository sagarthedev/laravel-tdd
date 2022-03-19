<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PostTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
   public function a_post_can_be_created(){
       $response = $this->post('/post',[
        'title' => 'This is a test post.',
        'body' => 'Some lorem ipsum text.'
       ]);
       $response->assertOk();
       $this->assertCount(1, Post::all());
   }
}
