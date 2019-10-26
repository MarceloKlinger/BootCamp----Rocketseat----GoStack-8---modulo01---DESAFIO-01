const express = require('express');

const server = express();

server.use(express.json());

const projects = [{ id: '1', title: 'Novo projeto', tasks: ['Nova tarefa'] }];

server.get('/projects', (req, res) => {
  res.json(projects);
});

server.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  return res.json(projects[id]);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;

  const project = {
    id,
    title,
    tasks: [],
  };

  projects.push(project);

  return res.json(project);
});

server.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find((p) => p.id == id);

  project.title = title;

  return res.json(project);
});

server.delete('projects/:id', (req, res) => {
  const { id } = req.params;

  const Index = projects.findIndex((p) => p.id == id);

  projects.splice(Index, 1);

  return res.json(projects);
});

server.listen(3000);
