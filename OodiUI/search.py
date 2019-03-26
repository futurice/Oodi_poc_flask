import functools

from flask import(
    Blueprint, flash, g, redirect, render_template, request, session, url_for)

bp = Blueprint('search', __name__, url_prefix='/search')

@bp.route('/start', methods=('GET', 'POST'))
def search_screen():
    if request.method == 'POST':
        search_term = request.form['searchterm']
        error = None
        results = request.form
        print(results)
        if results == "":
            error = 'Kirjoita hakukenttään avainsana.'

        else:
            #insert method to fetch information from sierra api HERE!!
            print('ei virheitä hienoa!!!')
            return render_template('search/results.html', results = results) #render to the template with the results
            #return redirect(url_for('search.term_results')) #render temp
        flash(error)
    #return render_template('base.html')

@bp.route('/term_results', methods=('GET', 'POST'))
def term_results():
    if request.method == 'POST':
        if request.form.get('Book1') == 'Book1':
            print("Book1 chosen")
        elif request.form.get('Book2') == 'Book2':
            print("Book2 chosen")
        else:
            return render_template()

    #elif request.method == "GET"
