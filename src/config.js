const dev = {
  STRIPE_KEY: "pk_test_s512CZwCyiz5RRBkPWc2oo4F00BO8o2n2I",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-10ba0wsx6xscg"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://q7jzii7wsd.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_PRSP7cAbJ",
    APP_CLIENT_ID: "4du717pe9hann8135491n2v94e",
    IDENTITY_POOL_ID: "us-east-2:6d8eabae-6e0a-469b-8f48-fbdf618dbc5c"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_s512CZwCyiz5RRBkPWc2oo4F00BO8o2n2I",
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-116snbv1uuhuq"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://ftsbgkvxp6.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_j7Q3XafQI",
    APP_CLIENT_ID: "3jj6kqipb1j06p20o9n19letbb",
    IDENTITY_POOL_ID: "us-east-2:15081cad-7ce7-49db-8b2a-8ad01ac88a9d"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
