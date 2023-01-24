import { chakra, Box, SimpleGrid, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { BsFillCartPlusFill, BsFillGearFill , BsBellFill  } from "react-icons/bs";


const Data = [
  {
    icon: BsFillCartPlusFill,
    name: "Lorem ipsum",
    text: "Manage all your online and offline sales in one place with a single integration, simplifying reporting and reconciliation. Terminal works seamlessly with Payments, Connect, and Billing."
  },
  {
    icon: BsFillGearFill,
    name: "Lorem ipsum",
    text: "Manage all your online and offline sales in one place with a single integration, simplifying reporting and reconciliation. Terminal works seamlessly with Payments, Connect, and Billing."
  },
  {
    icon: BsBellFill ,
    name: "Lorem ipsum",
    text: "Manage all your online and offline sales in one place with a single integration, simplifying reporting and reconciliation. Terminal works seamlessly with Payments, Connect, and Billing."
  },
  {
    icon: BsFillCartPlusFill,
    name: "Lorem ipsum",
    text: "Manage all your online and offline sales in one place with a single integration, simplifying reporting and reconciliation. Terminal works seamlessly with Payments, Connect, and Billing."
  },
  {
    icon: BsFillGearFill,
    name: "Lorem ipsum",
    text: "Manage all your online and offline sales in one place with a single integration, simplifying reporting and reconciliation. Terminal works seamlessly with Payments, Connect, and Billing."
  },
  {
    icon: BsBellFill ,
    name: "Lorem ipsum",
    text: "Manage all your online and offline sales in one place with a single integration, simplifying reporting and reconciliation. Terminal works seamlessly with Payments, Connect, and Billing."
  }
];

export const Services = (props) => {
    return (
      <div id='services' className='text-center'>
        <div className='container'>
          <div className='section-title'>
            <h2>Our Services</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className='row'>
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className='col-md-4'>
                    {' '}
                    <div className="service-icon">
                        <div className="service-icon_div">
                            <Icon as={d.icon} />
                        </div>
                    </div>
                    <div className='service-desc'>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : 'loading'}
          </div>
        </div>
      </div>
    )
  }
  