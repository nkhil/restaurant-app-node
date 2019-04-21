# Restaurant finder using Node

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

Based on Wes Bos' **Learn Node** course which includes building a responsive full stack web app for restaurants.

[![Safari-PSD-Mockup.jpg](https://i.postimg.cc/kGK767SL/Safari-PSD-Mockup.jpg)](https://postimg.cc/sGjkbdwJ)

### Features include:

- Users can search for restaurants based on their location (using the Google places API)
- Users can add new restaurants to the application (including location, photo, pre selected tags, description etc)
- Users can filter restaurants based on tags
- Users can login / logout to modify their submissions
- Users can leave reviews for restaurants

## Sample Data

To load sample data, run the following command in your terminal:

```bash
npm run sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
npm run blowitallaway
```

That will populate 16 stores with 3 authors and 41 reviews. The logins for the authors are as follows:

| Name          | Email (login)      | Password |
| ------------- | ------------------ | -------- |
| Wes Bos       | wes@example.com    | wes      |
| Debbie Downer | debbie@example.com | debbie   |
| Beau          | beau@example.com   | beau     |
