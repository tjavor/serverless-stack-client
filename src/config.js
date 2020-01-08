export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_s512CZwCyiz5RRBkPWc2oo4F00BO8o2n2I",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-second-try"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://khpyvyexg6.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_jyeBMsnYh",
    APP_CLIENT_ID: "1fgbjp12f7b6hmelqi5uc8ove3",
    IDENTITY_POOL_ID: "us-east-2:71da8e8c-7c51-4ab4-bfa0-366f73a7c041"
  }
};
