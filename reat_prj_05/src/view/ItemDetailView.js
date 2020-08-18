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
      // <div className="detail-content">
      //     <img className="detail-image" src = {item.detailUrl} />
      // </div>
      // <div id="detail-container">
      //     <Header className="detail-title" as="h2">
      //         상품 세부정보
      //     </Header>
      //     <p className="detail-title">
      //     </p>
      //     <Divider />
      //     <Item.Group>
      //         <Item>
      //             <Image className="detail-image" src={item.imgUrl} />

      //             <Item.Content className="detail-content">
      //                 <Item.Header as='h2'>{item.name}</Item.Header>
      //                 <br /><br />
      //                 <Item.Meta>
      //                 <span className='cinema'>{item.price}</span>
      //                 </Item.Meta>
      //                 <br />
      //                 <Item.Description className="item-description">{item.description}</Item.Description>
      //                 <br />
      //                 <Item.Extra className="item-extra">
      //                 <Label className="hash-tag">#{item.category}</Label>
      //                 </Item.Extra>
      //             </Item.Content>
      //         </Item>
      //     </Item.Group>
      // </div>
    );
  }
}

export default ItemDetailView;
