## USERS

- [ ] __GET /users__
  - Devuelve todos los usuarios registrados.

```formato
    filters:{
        description:"..."
        ....
    }
```

- [ ] __GET /userByEmail/:email__
  - Devuelve los detalles del usuario indicado por el id (idUser) que se envía por **PARAMS**.

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

- [ ] __PUT /user/:email__
  - Modifica el estado del usuario con los cambios indicados en el body de la request.
  - Debe pasar por los middleware's **verifyUserExist** y luego **verifyIsCurrentUser** para chequear que el usuario exista y que quien esté haciendo el cambio sea el mismo, en caso que una de las condiciones no se cumpla, el cambio no será realizado.

## NEWS

- [ ] __GET /news__
  - Devuelve las noticias según los filtros indicados en el body de la request.
- [ ] __GET /newById/:idNew__
  - Devuelve los detalles de la noticia indicada por el id (idNew) que se envía por **PARAMS**.
- [ ] __GET /newByIdArtist/:idArtist__
  - Devuelve las noticias del artista indicado por el id (idArtist) que se envía por **PARAMS**.
```formato
    filters:{
        description:"..."
        ....
    }
```

## ARTIST

- [ ] __GET /artists__
  - Devuelve todos los artistas.
- [ ] __GET /artistById/:idArtist__
  - Devuelve los detalles del artista indicado por el id (idArtist) que se envía por **PARAMS**.
- [ ] __GET /followedArtists/:idUser__
  - Devuelve los artistas seguidos por el usuario indicado por el id (idUser) que se envía por **PARAMS**.


## VIEWER

- [ ] __POST new/:idArtist__
  - Postea una New enviada por body, perteneciente al artista indicado por el id (idArtist) que se envía por **PARAMS**.
  - Debe pasar por el middleware **verifyIsArtist** para verificar que el usuario sea un artista.
- [ ] __PATCH new/:idNew__
  - Modifica la New indicada por el id (idNew) que se envía por **PARAMS**, con el estado que se le pase a la request por body.

## ADMIN

- [ ] __PATCH banUser/:email__
  - Banea al usuario indicado por el email que se envía por **PARAMS**.
- [ ] __PATCH deleteNew/:idNew__
  - Borra la noticia indicada por el id (idNew) que se envía por **PARAMS**.

> Todas las request de Admin, antes de devolver los datos verifica que el usuario que hace la petición sea el admin con el middleware **verifyAdmin**.
