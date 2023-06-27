import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import "./assets/tailwind.css";
import router from "./router";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql-demo.mead.io/",
  cache: new InMemoryCache(),
});

const query = gql`
      query getUsers {
        users {
          id
          name
          email
        }
      }
    `

client.query({
  query
}).then((res) => console.log(res)).catch((err) => {
  console.log('Err ', err);
})

const app = createApp(App);

app.use(router);
app.provide(client);
app.mount("#app");
