import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPostsModal from "./NewPostsModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PostsList extends Component {
  render() {
    const posts = this.props.posts;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Date added</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!posts || posts.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            posts.map(posts => (
              <tr key={posts.id}>
                <td>{posts.title}</td>
                <td>{posts.text}</td>
                <td>{posts.date_added}</td>
                <td align="center">
                  <NewPostsModal
                    create={false}
                    posts={posts}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={posts.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default PostsList;