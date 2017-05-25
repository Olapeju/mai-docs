import model from '../models';

const Documents = model.Document;

const DocumentController = {
  create(request, response) {
    Documents
      .create(request.body)
      .then(document => response.status(201).send(document))
      .catch(error => response.status(400).send(error));
  },
  getAll(request, response) {
    Documents
      .findAll({})
      .then(documents => response.status(200).send(documents))
      .catch(error => response.status(400).send(error));
  },
  getOne(request, response) {
    Documents
      .findById(request.params.id, {})
      .then((document) => {
        if (!document) {
          return response.status(404).send({
            message: 'Document does not exist'
          });
        }
        return response.status(200).send(document);
      })
      .catch(error => response.status(400).send(error));
  },
  update(request, response) {
    Documents
      .findById(request.params.documentId, {})
      .then((document) => {
        if (!document) {
          return response.status(404).send({
            message: 'Document Not Found',
          });
        }
        document
          .update(request.body)
          .then(() =>
            // Send back the updated todo.
            response.status(200).send(document))
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  },
  delete(request, response) {
    Documents
      .findById(request.params.id)
      .then((document) => {
        if (!document) {
          return response.status(400).send({
            message: 'Document not found',
          });
        }
        document
          .destroy()
          .then(() =>
            response.status(200).send({
              message: 'Document deleted successfully.'
            })
          )
          .catch(error => response.status(400).send(error));
      })
      .catch(error => response.status(400).send(error));
  }
};

export default DocumentController;
