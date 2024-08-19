import styled from "styled-components";

const Nav = styled.div`
  height: 70px;
  background: linear-gradient(170deg, #1bc059, #0d47a1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Title = styled.div`
  font-size: 30px;
  color: #fff;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
  margin-left: 20px;
  &:hover {
    color: #0f0;
  }
`;

const CartImg = styled.img`
  height: 48px;
  margin-right: 20px;
`;

const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartCount = styled.div`
  background: ${(props) => props.color};
  border-radius: 50%;
  padding: 4px 8px;
  position: absolute;
  right: 10px;
  top: -5px;
  font-size: 12px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

function Navbar(props) {
  const { cartCount } = this.props;
  return (
    <Nav>
      <Title>Movie-App</Title>
      <CartIconContainer>
        <CartImg
          src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
          alt="cart-icon"
        />
        <CartCount color="yellow" show={true}>
          {cartCount}
        </CartCount>
      </CartIconContainer>
    </Nav>
  );
}

export default Navbar;
