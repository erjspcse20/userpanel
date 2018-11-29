import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroll from './InfiniteScroll';

class Pagination extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      page: this.props.page || 1,
      itemsPerPage: this.props.itemsPerPage || 10,
    };

    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    this.setPaginationOnScroll();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAllPagesLoaded) {
      InfiniteScroll.unbind();
    } else {
      this.setPaginationOnScroll();
    }
  }

  componentWillUnmount() {
    InfiniteScroll.unbind();
  }

  setPaginationOnScroll() {
    InfiniteScroll.infiniteScroll({
      distance: 200,
      callback: this.paginate,
    });
  }

  paginate() {
    if (!this.props.isItemsLoading) {
      const page = (this.state.page + 1);
      this.setState({ page });

      this.props.fetchItems(page, this.state.itemsPerPage);
    }
  }

  render() {
    return (null);
  }
}

Pagination.defaultProps = {
  page: 1,
  itemsPerPage: 10,
  isItemsLoading: false,
  isAllPagesLoaded: false,
  fetchItems() {},
};

Pagination.propTypes = {
  page: PropTypes.number,
  itemsPerPage: PropTypes.number,
  isItemsLoading: PropTypes.bool,
  isAllPagesLoaded: PropTypes.bool,
  fetchItems: PropTypes.func,
};

export default connect(null)(Pagination);
