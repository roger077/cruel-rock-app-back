## USERS

- [ ] __GET /users__
  - Devuelve todos los usuarios registrados.
```formato
    filters:{
        description:"..."
        ....
    }    
```
- [ ] __GET /userById/:idUser__
  - Devuelve los detalles del usuario indicado por el id (idUser) que se envía por **PARAMS**.

## NEWS

- [ ] __GET /news__ 
  -  Devuelve las noticias según los filtros indicados en el body de la request.
```formato
    filters:{
        description:"..."
        ....
    }    
```
- [ ] __GET /newById/:idNew__
  -  Devuelve los detalles de la noticia indicada por el id (idNew) que se envía por **PARAMS**.
- [ ] __GET /newByIdArtist/:idArtist__
  -  Devuelve las noticias del artista indicado por el id (idArtist) que se envía por **PARAMS**.

## ARTIST

- [ ] __GET /artists__
  -  Devuelve todos los artistas.
- [ ] __GET /artistById/:idArtist__ 
  -  Devuelve los detalles del artista indicado por el id (idArtist) que se envía por **PARAMS**.
- [ ] __GET /followedArtists/:idUser__ 
  -  Devuelve los artistas seguidos por el usuario indicado por el id (idUser) que se envía por **PARAMS**.

## ADMIN

- [ ] __PATCH banUser/:email__
  -  Banea al usuario indicado por el email que se envía por **PARAMS**. 
- [ ] __PATCH deleteNew/:idNew__ 
  -  Borra la noticia indicada por el id (idNew) que se envía por **PARAMS**.

> Todas las request de Admin, antes de devolver los datos verifica que el usuario que hace la petición sea el admin con el middleware **verifyAdmin**.









