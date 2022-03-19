<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Task;
use App\Models\User;

class TaskTest extends TestCase
{

    use RefreshDatabase;

    /** @test */
    public function a_user_can_read_all_the_tasks()
    {
        //Given we have task in the database
        $task = Task::factory()->create();

        //When user visit the tasks page
        $response = $this->get('/tasks');

        //He should be able to read the task
        $response->assertSee($task->title);
    }

    /** @test */
    public function a_user_can_read_single_task()
    {
        //Given we have task in the database
        $task = Task::factory()->create();
        //When user visit the task's URI
        $response = $this->get('/tasks/' . $task->id);
        //He can see the task details
        $response->assertSee($task->title)
            ->assertSee($task->description);
    }

    /** @test */
    public function authenticated_users_can_create_a_new_task()
    {

            $user = User::factory()->create()->first();
           
            $this->actingAs($user);
            $task = Task::factory()->make();
            $this->post('/tasks/create',["title"=>"Test Title","description"=>"Test D."]);
            //It gets stored in the database
            print_r(Task::all());
            // print("Hellow World");
            $this->assertEquals(1,Task::all()->count());

    }
}
