from django.shortcuts import render, redirect
from .models import Task
from .forms import TaskForm


def tasks_list(request):
    tasks = Task.objects.all()
    return render(request, 'task/tasks_list.html', {'tasks': tasks})


def create_task(request):
    form = TaskForm()
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('tasks_list')
    return render(request, 'task/create_task.html', {'form': form})


def update_task(request, pk):
    task = Task.objects.get(id=pk)
    form = TaskForm(instance=task)
    if request.method == 'POST':
        form = TaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('tasks_list')
    return render(request, 'task/update_task.html', {'form': form})
