{% extends layout %}
{% block content %}
<div class="hero-unit">
  <h2>All Things</h2>
  <a href="/things/add" class="btn pull-right">Create a new Thing</a>
</div>

{% if things %}
<div id="things-list">
{% for thing in things %}
  <div class="row list-item" id="thing-{{ thing.id }}">
    <div class="span8">
      <h3><a href="/things/{{thing.id}}" class="btn pull-right">{{thing.id}}</a></h3>
    </div>
    <div class="span4">
      <h3><i class="icon-list-alt"></i>{{thing.id}}</h3>
    </div>
  </div>
{% endfor %}
{% endif %}
</div>
{% endblock %}