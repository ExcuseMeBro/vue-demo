<script setup>
import passport from 'passport'
import data from '../assets/secret.json'

console.log(JSON.parse(data));

passport.use(new OAuth2Strategy(JSON.parse(data)?.web,
  function (accessToken, refreshToken, profile, cb) {
    console.log(accessToken);
    User.findOrCreate({ exampleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));
</script>
<template>
  <div>

  </div>
</template>

<style lang="scss" scoped></style>