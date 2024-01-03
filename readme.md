## USERS

- [ ] __GET /user__
  - Devuelve todos los usuarios registrados.
```formato
    filters:{
        description:"..."
        ....
    }
```
- [ ] __GET /user/byEmail/:email__
  - Devuelve los detalles del usuario indicado por el id (idUser) que se envía por **PARAMS**.
- [ ] __PATCH /user/ban/:emailUser__
  - Banea el usuario indicado por el email.
  - Debe pasar por el middleware 
<!--
- [ ] __POST /user__
  - Agrega a la base de datos un nuevo usuario enviado mediante el body de la request.
  - Debe pasar por el middleware **verifyUserExist**, en caso de que no exista será registrado con éxito, de lo contrario no se registrará. 
```body
      user:{
          username:"...",
          password:"...",
          email:"..."
          ....
      }
```
 -->
- [ ] __PUT /user__
  - Modifica el estado del usuario con los cambios indicados en el body de la request.
  - Debe pasar por el middleware **verifyUserByToken** para evitar futuros inconvenientes, chequeando que el usuario que que esté haciendo los cambios sea sobre el mismo.


## NEWS

- [ ] __GET /new__
  - Devuelve las noticias según los filtros indicados en el body de la request.
- [ ] __GET /new/newById/:idNew__
  - Devuelve los detalles de la noticia indicada por el id (idNew) que se envía por **PARAMS**.
- [ ] __GET /new/newByIdArtist/:idArtist__
  - Devuelve las noticias del artista indicado por el id (idArtist) que se envía por **PARAMS**.
```formato
    filters:{
        description:"..."
        ....
    }
```
- [ ] __POST /new/__
  - Postea una New enviada por body.
  - Debe pasar por el middleware **verifyUserByToken** para chequear que el usuario de la new esté logueado.

## ARTIST

- [ ] __GET /artist__
  - Devuelve todos los artistas.
- [ ] __GET /artist/artistById/:idArtist__
  - Devuelve los detalles del artista indicado por el id (idArtist) que se envía por **PARAMS**.
- [ ] __POST /artist__
  - Debe pasar por el middleware **verifyUserExist**, en caso de que no exista será registrado con éxito, de lo contrario no se registrará. 
  - Debe pasar por el middleware **verifyIsArtist** para verificar que el usuario sea un artista.

## VIEWER
- [ ] __GET /viewer/followedArtists__
  - Devuelve los artistas seguidos por el usuario.
  - Debe pasar por el middleware **verifyUserByToken** para chequear que el usuario esté logueado y devolver los artistas seguidos por dicho usuario.
- [ ] __PATCH /viewer/follow/:idArtist__
- [ ] __PATCH /viewer/unfollow/:idArtist__
- [ ] __PUT /viewer__
  - Modifica el estado del usuario con los cambios indicados en el body de la request.
  - Debe pasar por el middleware **verifyUserByToken** para chequear que el usuario exista y que quien esté haciendo el cambio sea el mismo, en caso que una de las condiciones no se cumpla, el cambio no será realizado.
- [ ] __POST /viewer__
  - Debe pasar por el middleware verifyUserExist, en caso de que no exista será registrado con éxito, de lo contrario no se registrará.
## ADMIN

- [ ] __PATCH /admin/banUser/:email__
  - Banea al usuario indicado por el email que se envía por **PARAMS**.
- [ ] __PATCH /admin/deleteNew/:idNew__
  - Borra la noticia indicada por el id (idNew) que se envía por **PARAMS**.
- [ ] __PUT /admin/:email__
  - Modifica el estado del usuario con los cambios indicados en el body de la request.
  - Debe pasar por los middleware's **verifyUserExist** y luego **verifyIsCurrentUser** para chequear que el usuario exista y que quien esté haciendo el cambio sea el mismo, en caso que una de las condiciones no se cumpla, el cambio no será realizado.

> Todas las request de Admin, antes de devolver los datos verifica que el usuario que hace la petición sea el admin con el middleware **verifyAdmin**.
