def check_float(potential_float):
    try:
        float(potential_float)
        return True
    except ValueError:
        return False