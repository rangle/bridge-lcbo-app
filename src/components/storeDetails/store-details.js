import React from 'react';
import Moment from 'react-moment';
import { Table } from 'react-bootstrap';
import '../../styles/store-details.css';

const StoreDetails = ({store}) => (
  <div>
    <h3>{store.name}</h3>
      <p>{store.address}</p>
      <p>{store.telephone}</p>
      <Table className="hours-table" striped bordered md={6}>
        <tbody>
        <tr>
          <td>Monday:</td>
          <td>{store.store_hours.monday}</td>
        </tr>
        <tr>
          <td>Tuesday:</td>
          <td>{store.store_hours.tuesday}</td>
        </tr>
        <tr>
          <td>Wednesday:</td>
          <td>{store.store_hours.wednesday}</td>
        </tr>
        <tr>
          <td>Thursday:</td>
          <td>{store.store_hours.thursday}</td>
        </tr>
        <tr>
          <td>Friday:</td>
          <td>{store.store_hours.friday}</td>
        </tr>
        <tr>
          <td>Saturday:</td>
          <td>{store.store_hours.saturday}</td>
        </tr>
        <tr>
          <td>Sunday:</td>
          <td>{store.store_hours.sunday}</td>
        </tr>
        </tbody>
      </Table>
      <div>
        <h5><b>Accessibility</b></h5>
        <Table className="accessibility-table">
          <tbody>
          <tr>
            <td>Parking</td>
            <td>
            {
              store.has_parking ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          <tr>
          <td>Transit Access</td>
            <td>
            {
              store.has_transit_access ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          <tr>
          <td>WheelChair Accessible</td>
            <td>
            {
              store.has_wheelchair_accessability ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          <tr>
          <td>Bilingual Service</td>
            <td>
            {
              store.has_bilingual_services ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          <tr>
          <td>Product Consultant</td>
            <td>
            {
              store.has_product_consultant ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          <tr>
          <td>Tasting Bar</td>
            <td>
            {
              store.has_tasting_bar ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          <tr>
          <td>Beer Cold Room</td>
            <td>
            {
              store.has_beer_cold_room ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          <tr>
          <td>Special Occasions Permit</td>
            <td>
            {
              store.has_special_occasion_permits ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          <tr>
          <td>Vintage Corner</td>
            <td>
            {
              store.has_vintages_corner ? <i className="fa fa-check" aria-hidden="true"/> : <i className="fa fa-times" aria-hidden="true"/>
            }
            </td>
          </tr>
          </tbody>
        </Table>
      </div>
    <div><Moment parse="YYYY-MM-DD HH:mm">{store.updated_at}</Moment></div>
  </div>);

StoreDetails.propTypes = {
  store: React.PropTypes.object,
};

export default StoreDetails;
