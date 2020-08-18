import React, { Component } from "react";
import {
  Button,
  Icon,
  Image,
  Item,
  Label,
  Divider,
  Header,
  Modal,
} from "semantic-ui-react";
import "./ItemDetailView.css";
import ItemStore from "../store/MainImageStore";
import "./ItemView.css";
import "./ItemView.scss";

class ItemDetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

<<<<<<< HEAD
    render() {
        
        // const {item} = this.props;

        return (
            <Modal className="modal"
                onClose={() => this.setState({open:false})}
                onOpen={() => this.setState({open:true})}
                open={this.state.open}
                trigger={<Button className="btn">상세보기</Button>}
                >   
                <Modal.Content scrolling className="detail-content">
                    <Image size="large" src = {this.props.item.detailUrl} wrapped/>
                </Modal.Content>
            </Modal>
        )
    }
=======
  render() {
    const { item } = this.props;
    return (
      <Modal
        onClose={() => this.setState({ open: false })}
        onOpen={() => this.setState({ open: true })}
        open={this.state.open}
        trigger={
          <div className="btn">
            <h2>🔎</h2>
          </div>
        }
      >
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image size="medium" src="/images/avatar/large/rachel.png" wrapped />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => this.setState({ open: false })}>
            Nope
          </Button>
          <Button
            content="Yep, that's me"
            labelPosition="right"
            icon="checkmark"
            onClick={() => this.setState({ open: false })}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  }
>>>>>>> 34d1cc4e82411035dcee09d7a88dcb24546c8288
}

export default ItemDetailView;
