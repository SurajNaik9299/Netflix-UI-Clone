const errorCostants = {
  "auth/user-cancelled": "Cancelled",
  "auth/user-not-found": "User doesnt Exists!",
  "auth/user-disabled": "Disabled",
  "auth/user-mismatch": "Mismatch",
  "auth/user-signed-out": "Signed Out",
  "auth/weak-password": "Password not upto standards!",
  "auth/wrong-password": "Invalid Email or Password1",
  "auth/too-many-requests": "Failed to Authenticate!",
  "auth/email-already-in-use": "Email Already in use1",
};

export const map = new Map(Object.entries(errorCostants))