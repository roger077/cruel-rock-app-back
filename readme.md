## USERS

- [ ] **GET /users**
  - Devuelve todos los usuarios registrados.

```formato
    filters:{
        description:"..."
        ....
    }
```

- [ ] **GET /userById/:idUser**
  - Devuelve los detalles del usuario indicado por el id (idUser) que se envía por **PARAMS**.

## NEWS

- [ ] **GET /news**
  - Devuelve las noticias según los filtros indicados en el body de la request.

```formato
    filters:{
        description:"..."
        ....
    }
```

- [ ] **GET /newById/:idNew**
  - Devuelve los detalles de la noticia indicada por el id (idNew) que se envía por **PARAMS**.
- [ ] **GET /newByIdArtist/:idArtist**
  - Devuelve las noticias del artista indicado por el id (idArtist) que se envía por **PARAMS**.

## ARTIST

- [ ] **GET /artists**
  - Devuelve todos los artistas.
- [ ] **GET /artistById/:idArtist**
  - Devuelve los detalles del artista indicado por el id (idArtist) que se envía por **PARAMS**.
- [ ] **GET /followedArtists/:idUser**
  - Devuelve los artistas seguidos por el usuario indicado por el id (idUser) que se envía por **PARAMS**.

## ADMIN

- [ ] **PATCH banUser/:email**
  - Banea al usuario indicado por el email que se envía por **PARAMS**.
- [ ] **PATCH deleteNew/:idNew**
  - Borra la noticia indicada por el id (idNew) que se envía por **PARAMS**.

> Todas las request de Admin, antes de devolver los datos verifica que el usuario que hace la petición sea el admin con el middleware **verifyAdmin**.
