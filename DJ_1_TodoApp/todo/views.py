from django.shortcuts import render, redirect
from .models import Tasks

def index(request):
    tasks = Tasks.objects.all()
    return render(request, 'todo/index.html', {'tasks': tasks})

def add_task(request):
    if request.method == 'POST':
        title = request.POST['title']
        Tasks.objects.create(title=title)
        return redirect('index')

def delete_task(request, task_id):
    task = Tasks.objects.get(id=task_id)
    task.delete()
    return redirect('index')

def complete_task(request, task_id):
    task = Tasks.objects.get(id=task_id)
    task.completed = True
    task.save()
    return redirect('index')
