import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentListRow from './DocumentListRow.jsx';
import DocumentActionBar from './DocumentActionBar.jsx';
import * as actions from '../../actions/documentActions';

class AllDocuments extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToManageDocument = this.redirectToManageDocument.bind(this);
    this.onViewAccessChange = this.onViewAccessChange.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);

    this.state = {
      documents: [],
      searchResults: [],
      accessType: null,
      search: ''
    };
  }

  redirectToManageDocument() {
    this.context.router.push('/document');
  }

  onViewAccessChange(event) {
    this.setState({ accessType: event.target.value });
  }

  onSearchChange(event) {
    this.setState({ search: event.target.value });
    this.props.actions.search(event.target.value);
  }

  render() {
    const { documents } = this.props;
    const { searchResults } = this.props;

    let filteredDocuments;
    if (this.state.search !== '') {
      filteredDocuments = searchResults.filter(document =>
        document.viewAccess !== 'Private');
    } else if (this.state.accessType === null
      || this.state.accessType === 'All') {
      filteredDocuments = documents.filter(document =>
        document.viewAccess !== 'Private');
    } else {
      filteredDocuments = documents.filter(document =>
        document.viewAccess !== 'Private').filter(document =>
          document.viewAccess === this.state.accessType
        );
    }
    return (
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col l6 m6 s12">
              <h1>Sitewide Documents</h1>
            </div>
          </div>

          <DocumentActionBar
            redirectToManageDocument={this.redirectToManageDocument}
            onViewAccessChange={this.onViewAccessChange}
            onSearchChange={this.onSearchChange}
            sitewide="sitewide" />

          <div className="row">
            <div className="col s12">
              {filteredDocuments.map(document =>
                <DocumentListRow
                  loggedInUserID={this.props.loggedInUserID}
                  key={document.id}
                  document={document} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AllDocuments.propTypes = {
  documents: PropTypes.array,
  searchResults: PropTypes.array,
  loggedInUserID: PropTypes.number,
  search: PropTypes.string,
  actions: PropTypes.object
};

// Pull in the React Router context
// so router is available on this.context.router.
AllDocuments.contextTypes = {
  router: PropTypes.object
};

const mapStateToProps = state => ({
  searchResults: state.searchResults.documents || [],
  documents: state.documents || {},
  loggedInUserID: state.isAuth.loggedInUser.id
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AllDocuments);