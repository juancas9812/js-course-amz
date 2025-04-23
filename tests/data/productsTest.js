import {Product, Clothing, Appliance} from '../../data/products.js';


describe('test suite: Product class', () => {
  let product;
  beforeEach(() => {
    product = new Product({
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  });

  it('new product created correctly', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(product.image).toEqual('images/products/athletic-cotton-socks-6-pairs.jpg');
    expect(product.name).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
    expect(product.rating).toEqual({stars:4.5, count:87});
    expect(product.priceCents).toEqual(1090);
  });

  it('gets the stars url', () => {
    expect(product.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('gets the price', () => {
    expect(product.getPrice()).toEqual('$10.90');
  });

  it('does not have extra info', () => {
    expect(product.extraInfoHTML()).toEqual('');
  });
});

describe('test suite: Clothing class', () => {
  let product;

  beforeEach(() => {
    product = new Clothing({
      id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
      image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
      name: "Adults Plain Cotton T-Shirt - 2 Pack",
      rating: {
        stars: 4.5,
        count: 56
      },
      priceCents: 799,
      keywords: [
        "tshirts",
        "apparel",
        "mens"
      ],
      type: "clothing",
      sizeChartLink: "images/clothing-size-chart.png"
    })
  });

  it('new clothing product created correctly', () => {
    expect(product.id).toEqual('83d4ca15-0f35-48f5-b7a3-1ea210004f2e');
    expect(product.image).toEqual('images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg');
    expect(product.name).toEqual('Adults Plain Cotton T-Shirt - 2 Pack');
    expect(product.rating).toEqual({stars:4.5, count:56});
    expect(product.priceCents).toEqual(799);
  });

  it('gets the stars url', () => {
    expect(product.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('gets the price', () => {
    expect(product.getPrice()).toEqual('$7.99');
  });

  it('displays size chart link', () => {
    expect(product.extraInfoHTML()).toContain('Size chart');
  });
});

describe('test suite: Appliance', () => {
  let product;

  beforeEach(() => {
    product = new Appliance({
      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: "appliance",
      instructionsLink: "images/appliance-instructions.png",
      warrantyLink: "images/appliance-warranty.png"
    })
  });

  it('new clothing product created correctly', () => {
    expect(product.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    expect(product.image).toEqual('images/products/black-2-slot-toaster.jpg');
    expect(product.name).toEqual('2 Slot Toaster - Black');
    expect(product.rating).toEqual({stars:5, count:2197});
    expect(product.priceCents).toEqual(1899);
  });

  it('gets the stars url', () => {
    expect(product.getStarsUrl()).toEqual('images/ratings/rating-50.png');
  });

  it('gets the price', () => {
    expect(product.getPrice()).toEqual('$18.99');
  });

  it('displays instructions and warranty links', () => {
    expect(product.extraInfoHTML()).toContain('Instructions');
    expect(product.extraInfoHTML()).toContain('Warranty');
  });
});