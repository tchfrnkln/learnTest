import { BASE_URL } from "@/constants/Utils";


export const handleSignInUser = async (
  userEmail: string,
  userPass: string,
) => {

  await fetch(`${BASE_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: userEmail, password: userPass }),
  })
    .then(async (response) => {

      if (!response.ok) {
        const error = await response?.text();
        console.log(response.status, error);
      } else {
        return response.json().then(async (data) => {
          console.log(data.accessToken);
          // return data.accessToken;
        });
      }
    })
    .catch((err) => {
      console.log("err", err);
      return false;
    });
};

export const createTransaction = async (
  payload: any,
  token: string
): Promise<void> => {
  console.log("payload", payload);
  try {
    const response = await fetch(`${BASE_URL}transactions/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        sub_token: `${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw console.log(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Transaction Created Successfully", data);

    if (data?.message === "success") {
      var order =
      {
        "deliveryId":"6638c7cee44a6277e2a3f9b8",
        "transactionId":data.savedTransaction._id,
        "agentId": "661fa79c184d5841e93df625",
        "deliveryRequestTime": "2024-02-05 10:00 AM",
        "deliveryAcceptanceTime": "2024-03-25 10:00 AM",
        "pickupTime": "2024-03-26 2:00 PM",
        "orderStatus":"picked"
      }
      generateOrder(order, token)
    }
  } catch (error) {
    console.log(error);
    console.log("err", error);
  }
};

export const generateOrder = async (
  payload: any,
  token: string
): Promise<void> => {
  console.log("payload", payload);
  try {
    const response = await fetch(`${BASE_URL}orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        sub_token: `${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw console.log(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Order Generated Successfully", data.data);

    var updateOrder = {
      "agentId": "661fa79c184d5841e93df625",
      "ownerId": "661f8c844b91f5c7bff49f59",
      "orderStatus": "completed"
    }

    updateOrderStatus(updateOrder, token, data.data.order._id)

  } catch (error) {
    console.log(error);
    console.log("err", error);
  }
};

const updateOrderStatus = async (
  payload:any,
  token:string, 
  order_id:string
) => {
  try {
    const response = await fetch(`${BASE_URL}orders/orderStatus/${order_id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        sub_token: `${token}`,
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw console.log(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Order status updated successfully:', data);    
  } catch (error) {
    console.error('Error updating order status:', error);
  }
};