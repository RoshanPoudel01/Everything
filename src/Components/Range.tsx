import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import apiCall from "../Helper/Axios";
import useDebounce from "../Hooks/useDebounce";

interface range {
  min: number;
  max: number;
  step: number;
}

const Range = ({ min, max, step }: range) => {
  const [price, setPrice] = useState([0, 2000]);

  const debouncedPrice = useDebounce(price, 8000);
  console.log(price[1]);
  const getFilteredProducts = async () => {
    const filteredProducts = await apiCall.get(
      `products/filter?min=${price[0]}$max=${price[1]}`
    );
    console.log(filteredProducts);
  };
  // const onChangeHandlers = (e: any) => {
  //   // console.log(e);
  //   setPrice(e);
  //   console.log(price);

  //   getFilteredProducts();
  // };

  return (
    <Flex gap={8} pl={4} maxWidth={"500px"}>
      <Text>Filter By Price:</Text>
      <RangeSlider
        value={price}
        min={min}
        // onChange={(e) => {
        //   setPrice;
        //   onChangeHandlers(e);
        // }}
        onChange={setPrice}
        max={max}
        step={step}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack bg="#1A202C" />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={[10, 10]} index={0}>
          {price[0]}
        </RangeSliderThumb>
        <RangeSliderThumb boxSize={[10, 10]} index={1}>
          {price[1]}
        </RangeSliderThumb>
      </RangeSlider>

      <Button onClick={getFilteredProducts}>Filter</Button>
    </Flex>
  );
};

export default Range;
