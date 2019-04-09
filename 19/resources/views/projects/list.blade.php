<h2 class="title is-4 is-spaced">Projects</h2>
<ul>
    @forelse ($projects as $project)
        <li>
            <a href="#">{{ $project->name }}</a>
        </li>
    @empty
        <div>No projects yet.</div>
    @endforelse
