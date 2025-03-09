// addFavorito.js (ação)
export const addFavorito = (item, idUsuario) => {
    return async (dispatch) => {  
      try {
       
        const response = await fetch("http://127.0.0.1:8000/api/addFavorito", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_usuario: idUsuario,
            id_produto: item.id_produto,
          }),
        });
  
        const data = await response.json();
        console.log("Resposta do servidor:", data);
  
        dispatch({
          type: "ADD_FAVORITO",
          item,
        });

      } catch (error) {
        console.error("Erro ao adicionar favorito:", error);
      }
    };
};
