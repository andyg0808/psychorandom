import chai from "chai";
import pr from "../src/index.js";
//let pr = require("../index.js");
//let sinon = require("sinon");
//import {sinon} from "../node_modules/sinon/lib/sinon.js"
// Provide a fake which always returns 0.5
//Math.random = sinon.fake.returns(0.5);
let expect = chai.expect;

describe("psychorandom", () => {
  const real_random = Math.random;
  it("takes a list of lists", () => {
    Math.random = () => 0.5;
    let sorted = pr([[1]]);
    expect(sorted).to.eql([1]);
  });

  it("tries to avoid adding items from the list last used", () => {
    Math.random = () => 0.5;
    let sorted = pr([[1, 2], [6, 7]]);
    expect(sorted).to.eql([7, 2, 6, 1]);
  });

  it("will include items from a previously used list after 9 other choices", () => {
    Math.random = real_random;
    const min_dist = 9;
    const length = 2;
    for (let n = 0; n < 3; n++) {
      let items = [];
      for (let i = 0; i < 100; i += length) {
        let item = [];
        for (let j = 0; j < length; j++) {
          item.push(i);
        }
        items.push(item);
      }

      let sorted = pr(items);

      for (let i = 0; i < sorted.length - min_dist; i++) {
        for (let j = 1; j <= min_dist; j++) {
          const p = i + j;
          expect(sorted[i]).not.to.equal(sorted[p]);
        }
      }
    }
  });
});
