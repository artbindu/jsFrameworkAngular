import { Injectable } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  // run `npm run db:start` to access the
  readonly jsonServerAPI = "http://localhost:4242/locations";
  housingLocationList: HousingLocation[] = [];
  constructor() {
    // this.housingLocationList = []; // array of "HousingLocation"
  }

  // getAllHousingLocations(): HousingLocation[] {
  //   return this.housingLocationList;
  // }
  // HTTP Communication with json-server: Lesson-14
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    let reqInfo = {
      api: this.jsonServerAPI,
      options: {
        method: 'GET',
      }
    };
    // const data = await fetch(this.jsonServerAPI);
    // return await data.json() ?? [];

    return await fetch(reqInfo.api, reqInfo.options)
      .then((res: any) => {
        if (!res.ok) {
          throw new Error(`Request failed with status code ${res.status} from url ${res.url}`, { cause: res });
        } else {
          return res.json();
        }
      })
      .then((result: HousingLocation[]) => {
        // console.log('all result: ', result);
        return result;
      })
      .catch(err => {
        console.error('Found Error as: ', err.message);
        return [];
      });
  }

  // getHousingLocationById(_id: number): HousingLocation | undefined {
  //   console.log('GetHousingLocationByid: ', _id);
  //   return this.housingLocationList.find(ele => ele.id === _id);
  // }
  // HTTP Communication with json-server: Lesson-14
  async getHousingLocationById(_id: number): Promise<HousingLocation | undefined> {
    console.log('GetHousingLocationByid: ', _id);
    let reqInfo = {
      api: this.jsonServerAPI + "/" + _id,
      options: {
        method: 'GET',
      }
    };
    // const data = await fetch(`${this.jsonServerAPI}/${_id}`);
    // return await data.json() ?? [];

    return await fetch(reqInfo.api, reqInfo.options)
      .then((res1: any) => {
        if (!res1.ok) {
          throw new Error(`Request failed with status code ${res1.status} from url ${res1.url}`, { cause: res1 });
        } else {
          return res1.json();
        }
      })
      .then((result: HousingLocation) => {
        // console.log('id result: ', result);
        return result;
      })
      .catch(err => {
        console.error('Found Error as: ', err.message);
        return undefined;
      });
  }

  // lesson-12
  submitApplication(fName: string, lName: string, mail: string) {
    console.log(`Home Application received: Name: ${fName} ${lName}, email: ${mail}`);
  }
}
