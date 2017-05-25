import model from '../models';

const Role = model.Role;

const RoleController = {
  create(request, response) {
    Role.create({
      title: request.body.title,
    })
    .then(role => response.status(201).send(role))
    .catch(error => response.status(400).send(error));
  },
  getAll(request, response) {
    return Role
      .findAll({})
      .then(role => response.status(200).send(role))
      .catch(error => response.status(400).send(error));
  },
  getOne(request, response) {
    return Role
      .findById(request.params.id, {})
      .then((role) => {
        if (!role) {
          return response.status(404).send({
            message: 'Role does not exist'
          });
        }
        return response.status(200).send(role);
      })
      .catch(error => response.status(400).send(error));
  },
  update(request, response) {
    return Role
      .findById(request.params.id, {})
      .then((role) => {
        if (!role) {
          return response.status(404).send({
            message: 'Role Not Found',
          });
        }
        return role
          .update(request.body)
          .then(() =>
            // Send back the updated todo.
            response.status(200).send(role))
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  },
  delete(request, response) {
    return Role
      .findById(request.params.id)
      .then((role) => {
        if (!role) {
          return response.status(400).send({
            message: 'Role Not Found',
          });
        }
        return role
          .destroy()
          .then(() =>
            response.status(200).send({
              message: 'Role deleted successfully.'
            }))
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  },
};

export default RoleController;
