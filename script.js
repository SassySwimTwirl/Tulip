body {
    font-family: 'Segoe UI', Arial, sans-serif;
    background: #f4eee2;
    margin: 0;
    padding: 0;
    text-align: center;
}

h1 {
    margin-top: 30px;
    color: #333;
}

.game-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin: 40px 0;
    gap: 60px;
}

.ingredients-container {
    display: flex;
    flex-direction: column;
    gap: 18px;
    min-width: 160px;
}

.ingredient {
    width: 140px;
    height: 55px;
    line-height: 55px;
    font-weight: bold;
    color: #333;
    border-radius: 10px;
    cursor: grab;
    box-shadow: 2px 2px 10px #bbb4ab54;
    font-size: 1.05rem;
    border: 2px solid #e1d6c1;
    background: #ffe;
}

.ingredient.being-dragged {
    opacity: 0.5;
}

.pot-container {
    display: flex;
    align-items: center;
    min-height: 200px;
}

.pot {
    width: 170px;
    height: 120px;
    background: #b6d1d0;
    border-radius: 0 0 80px 80px;
    box-shadow: 0 8px 20px #aabbbf84;
    border: 4px solid #708e99;
    position: relative;
    transition: background 0.2s;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-weight: bold;
    color: #334f51;
    font-size: 1.15rem;
}

.pot.drag-over {
    background: #98bead;
    border-color: #43686b;
}

#message {
    margin-top: 18px;
    font-size: 1.33rem;
    color: #207a3dae;
    font-weight: bold;
    min-height: 28px;
}

button {
    margin-top: 22px;
    padding: 0.8em 2em;
    background: #b0dfc7;
    border: none;
    border-radius: 25px;
    color: #224333;
    font-weight: bold;
    font-size: 1.1em;
    cursor: pointer;
    box-shadow: 2px 4px 16px #a1baad3a;
}
