import { useNavigate } from "react-router-dom";
import { ListItem, UnorderedList, ListIcon } from "@chakra-ui/react";
import { FaHome, FaUserCircle } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

const MobileNav = ({ onOpen }) => {
  const navigate = useNavigate();

  return (
    <UnorderedList
      listStyleType="none"
      h="50px"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
    >
      <ListItem>
        <ListIcon
          as={FaHome}
          fontSize="25px"
          color="white"
          onClick={() => navigate("/home")}
        />
      </ListItem>
      <ListItem cursor="pointer" fontSize="25px" color="white">
        <ListIcon as={MdOutlineExplore} />
      </ListItem>
      <ListItem cursor="pointer" fontSize="25px" color="white" onClick={onOpen}>
        <ListIcon as={IoMdAddCircle} />
      </ListItem>
      <ListItem cursor="pointer" fontSize="25px" color="white">
        <ListIcon as={BsFillBookmarkFill} />
      </ListItem>
      <ListItem
        cursor="pointer"
        fontSize="25px"
        color="white"
        onClick={() => navigate("/profile")}
      >
        <ListIcon as={FaUserCircle} />
      </ListItem>
    </UnorderedList>
  );
};

export { MobileNav };
